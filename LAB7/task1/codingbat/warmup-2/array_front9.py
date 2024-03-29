def array_front9(nums):
  size=min(4,len(nums))
  count=0
  for i in range(size):
    if(nums[i]==9):
      return True
  return False
      