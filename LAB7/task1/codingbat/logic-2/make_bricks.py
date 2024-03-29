def make_bricks(small, big, goal):
    max_covered = small + big * 5
    
    return max_covered >= goal and (goal % 5 <= small)