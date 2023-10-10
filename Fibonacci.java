import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> fibo = new ArrayList<>();
        fibo.add(0);
        fibo.add(1);

        System.out.print("Digite um numero: ");
        int N = sc.nextInt();
        sc.close();

        for (int i = 2; i <= N; i++) {
            int soma = fibo.get(i - 1) + fibo.get(i - 2);
            fibo.add(soma);
        }

        System.out.println(fibo);
    }
}