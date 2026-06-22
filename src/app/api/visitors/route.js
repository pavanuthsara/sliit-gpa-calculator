import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = Redis.fromEnv();

const VISITOR_KEY = 'sliit_gpa_calculator:visitors';

export async function GET() {
  try {
    // Atomically increment the counter and return the new value
    const count = await redis.incr(VISITOR_KEY);
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error('[visitors] Redis error:', error);
    // Return null so the UI can gracefully hide the counter on error
    return NextResponse.json({ count: null }, { status: 200 });
  }
}
