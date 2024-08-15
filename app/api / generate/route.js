import { NextResponse } from "next/server";
import OpenAI from "openai";


const systemPrompt = `
You are a flashcard creator. Your task is to generate concise and effective flashcards based on the given topic or content. Follow these guidelines:

1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and brief answers for the back of the flashcard.
3. Focus on key concepts, definitions, and important facts.
4. Use simple language to ensure clarity and ease of understanding.
5. Avoid overly complex or lengthy explanations.
6. Create a balanced mix of different question types (e.g., definitions, multiple-choice, fill-in-the-blank).
7. Ensure that each flashcard covers a single, distinct piece of information.
8. Use proper formatting and punctuation for readability.

Remember, the goal is to create flashcards that facilitate effective learning and memorization.

Return the flashcards in the following JSON format:
{
  "flashcards": [
        {
            "front": str,
            "back": str
        }
    ]
}
`

export async function POST(req) {
    const openai = new OpenAI();
    const data = await req.text();

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: data }
        ],
        model: "gpt-4o",
        response_format:{type: 'json_object'} 
    });

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcard)
}