import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { nanoid } from 'nanoid';
import { WaitlistEntry, WaitlistResponse } from '@/lib/models/waitlist';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    console.log('MongoDB URI exists:', !!process.env.MONGODB_URI);
    console.log('Attempting to connect to MongoDB...');
    
    const { name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    console.log('Successfully connected to MongoDB database:', db.databaseName);
    const collection = db.collection<WaitlistEntry>('waitlist');

    // Check if email already exists
    const existingEntry = await collection.findOne({ email });
    if (existingEntry) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email already registered',
          referralCode: existingEntry.referralCode 
        },
        { status: 409 }
      );
    }

    // Generate unique referral code
    let referralCode: string;
    let isUnique = false;
    let attempts = 0;
    const maxAttempts = 10;

    do {
      referralCode = nanoid(8).toUpperCase();
      const existingCode = await collection.findOne({ referralCode });
      isUnique = !existingCode;
      attempts++;
    } while (!isUnique && attempts < maxAttempts);

    if (!isUnique) {
      return NextResponse.json(
        { success: false, message: 'Failed to generate unique referral code' },
        { status: 500 }
      );
    }

    // Create waitlist entry
    const waitlistEntry: WaitlistEntry = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      referralCode,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(waitlistEntry);

    if (result.acknowledged) {
      return NextResponse.json({
        success: true,
        message: 'Successfully joined the waitlist!',
        referralCode,
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to save to database' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}