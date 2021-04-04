# Context: This is part 1 of TwT: https://www.youtube.com/watch?v=t5Bo1Je9EmE&t=390s&ab_channel=TechWithTim
import asyncio

async def main(): # When you call this function, it returns a coroutine object
    print("Dom")
    task = asyncio.create_task(foo("text"))
    # await task # (wait till task is finished before going to the next line)
    await asyncio.sleep(0.5)
    print("finish")

async def foo(text):
    print(text)
    await asyncio.sleep(1) # You can only use await within async

asyncio.run(main()) # Create the event loop which then lets us actually run main()


