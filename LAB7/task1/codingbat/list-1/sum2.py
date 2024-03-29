def sum2(nums):
  sum=0
  size=min(2,len(nums))
  for i in range(size):
    sum+=nums[i]
  return sum