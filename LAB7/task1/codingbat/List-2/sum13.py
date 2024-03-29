def sum13(nums:list):
  nums.insert(0,0)
  ans=0
  for i in range(len(nums)):
    if(nums[i]==13 or nums[i-1]==13):
      continue
    ans+=nums[i]
  return ans

