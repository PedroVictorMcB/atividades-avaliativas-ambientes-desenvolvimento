import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> sequenciaFibonacci = new ArrayList<>();
        sequenciaFibonacci.add(0);
        sequenciaFibonacci.add(1);

        System.out.print("Digite um numero: ");
        int N = sc.nextInt();
        sc.close();

        for (int i = 2; i <= N; i++) {
            int soma = sequenciaFibonacci.get(i - 1) + sequenciaFibonacci.get(i - 2);
            sequenciaFibonacci.add(soma);
        }

        System.out.println(sequenciaFibonacci);
    }
}