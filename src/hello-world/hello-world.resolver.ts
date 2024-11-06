import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'response hello world', name: 'hello' })
  helloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getramdoNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'From zero to argument TO',
  })
  getRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true }) to: number = 7,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
