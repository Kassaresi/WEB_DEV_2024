def make_chocolate(small, big, goal):
    big_kilos = min(goal // 5, big)
    
    remaining_goal = goal - big_kilos * 5
    
    if remaining_goal <= small:
        return remaining_goal
    else:
        return -1
