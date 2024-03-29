def rotate_left3(nums:list):
    nums.append(nums[0])
    nums.pop(0)
    return nums
  
