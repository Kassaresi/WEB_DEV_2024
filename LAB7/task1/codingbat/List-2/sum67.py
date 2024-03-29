def sum67(nums):
  closed=False
  ans=0
  for num in nums:
    if(closed):
       if(num==7):
          closed=False
    else:
       if(num==6):
          closed=True
       else:
          ans+=num
  return ans