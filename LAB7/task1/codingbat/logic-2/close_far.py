def close_far(a, b, c):
    def is_close(x, y):
        return abs(x - y) <= 1

    if (is_close(b, a) and not is_close(c, a) and not is_close(c, b)) or \
       (is_close(c, a) and not is_close(b, a) and not is_close(b, c)):
        return True

    if (is_close(a, b) and not is_close(c, b) and not is_close(c, a)) or \
       (is_close(c, b) and not is_close(a, b) and not is_close(a, c)):
        return True

    return False
