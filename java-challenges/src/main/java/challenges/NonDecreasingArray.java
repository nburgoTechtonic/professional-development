package challenges;

public class NonDecreasingArray {
  public static boolean checkPossibility(int[] nums) {
    boolean hasChanged = false;
    for (int i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        if (hasChanged) {
          return false;
        }
        if (i == 0
            || nums[i + 1] >= nums[i - 1]
            || i == nums.length - 2
            || nums[i] + 1 <= nums[i + 2]) {
          hasChanged = true;
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
