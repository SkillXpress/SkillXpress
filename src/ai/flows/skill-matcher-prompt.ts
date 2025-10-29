'use server';

/**
 * @fileOverview A skill matching AI agent.
 *
 * - skillMatcher - A function that handles the skill matching process.
 * - SkillMatcherInput - The input type for the skillMatcher function.
 * - SkillMatcherOutput - The return type for the skillMatcher function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillMatcherInputSchema = z.object({
  skillRequest: z
    .string()
    .describe('A description of the skills needed for a micro-task.'),
});
export type SkillMatcherInput = z.infer<typeof SkillMatcherInputSchema>;

const SkillMatcherOutputSchema = z.object({
  expertSuggestions: z.array(
    z.object({
      expertId: z.string().describe('The unique identifier of the expert.'),
      matchScore: z
        .number()
        .describe(
          'A score indicating how well the expert matches the skill request.'
        ),
      expertProfileSummary: z
        .string()
        .describe('A brief summary of the expert profile.'),
    })
  ),
});
export type SkillMatcherOutput = z.infer<typeof SkillMatcherOutputSchema>;

export async function skillMatcher(input: SkillMatcherInput): Promise<SkillMatcherOutput> {
  return skillMatcherFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillMatcherPrompt',
  input: {schema: SkillMatcherInputSchema},
  output: {schema: SkillMatcherOutputSchema},
  prompt: `You are an AI assistant designed to match user skill requests with the most suitable experts.

  Given the following skill request, identify and suggest the most relevant experts from the available pool.

  Consider factors such as expertise, availability, ratings, and pricing to determine the best matches.

  Skill Request: {{{skillRequest}}}

  Format your response as a JSON object with an array of expert suggestions, including their ID, match score, and profile summary.
  `,
});

const skillMatcherFlow = ai.defineFlow(
  {
    name: 'skillMatcherFlow',
    inputSchema: SkillMatcherInputSchema,
    outputSchema: SkillMatcherOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
