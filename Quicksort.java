import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Quicksort {
    private static List<Integer> desordedNums = new ArrayList<>();
    private static List<Integer> ordedNums = new ArrayList<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a quantidade de números: ");
        int N = scanner.nextInt();

        makeArray(N);

        System.out.println("Números Desordenados: " + desordedNums);
        pressOrded();
        System.out.println("Números Ordenados: " + ordedNums);

        scanner.close();
    }

    private static void makeArray(int N) {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < N; i++) {
            System.out.print("Digite o " + (i + 1) + "º número: ");
            int num = scanner.nextInt();
            desordedNums.add(num);
        }

        scanner.close();
    }

    private static List<Integer> quicksort(List<Integer> arr) {
        if (arr.size() <= 1) {
            return arr;
        }

        int pivot = arr.get(0);
        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();

        for (int i = 1; i < arr.size(); i++) {
            if (arr.get(i) < pivot) {
                left.add(arr.get(i));
            } else {
                right.add(arr.get(i));
            }
        }

        List<Integer> result = new ArrayList<>();
        result.addAll(quicksort(left));
        result.add(pivot);
        result.addAll(quicksort(right));

        return result;
    }

    private static void pressOrded() {
        ordedNums = quicksort(desordedNums);
    }
}