# Context: This is part two of TwT: https://www.youtube.com/watch?v=t5Bo1Je9EmE&t=390s&ab_channel=TechWithTim

import asyncio
from asyncio.tasks import sleep

async def fetch_data():
    print('start fetching')
    await asyncio.sleep(2)
    print('done fetching')
    return {'data': 1}

async def print_numbers():
    for number in range (10):
        print(number)
        await asyncio.sleep(0.25)

async def main():
    task1 = asyncio.create_task(fetch_data())
    task2 = asyncio.create_task(print_numbers())

    value = await task1 # We have to wait for task 1 to finish running before continuing. This here is something like a "promise" btw.
    await task2 # But as fetch_data is delayed, we can start doing print_numbers 
    print(value)

asyncio.run(main())

# Output:
# start fetching
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# done fetching
# 8
# 9
# {'data': 1}