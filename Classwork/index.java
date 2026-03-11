import java.util.*;

class index {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();

        while (t-- > 0) {

            int n = scanner.nextInt();
            int[] a = new int[n];

            for (int i = 0; i < n; i++) {
                a[i] = scanner.nextInt();
            }

            int[] leftDiff = new int[n];
            leftDiff[0] = -1;

            for (int i = 1; i < n; i++) {
                if (a[i] != a[i - 1]) {
                    leftDiff[i] = i - 1;
                } else {
                    leftDiff[i] = leftDiff[i - 1];
                }
            }

            int q = scanner.nextInt();

            while (q-- > 0) {
                int l = scanner.nextInt() - 1;
                int r = scanner.nextInt() - 1;

                if (leftDiff[r] >= l) {
                    System.out.println((leftDiff[r] + 1) + " " + (r + 1));
                } else {
                    System.out.println("-1 -1");
                }
            }

            System.out.println();
        }
    }
}