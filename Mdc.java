import java.util.Scanner;

public class Mdc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o primeiro numero: ");
        int num1 = sc.nextInt();

        System.out.print("Digite o segundo numero: ");
        int num2 = sc.nextInt();

        sc.close();

        int mdc = MDC(num1, num2);

        System.out.println("O MDC dos numeros escolhidos eh " + mdc + ".");
    }

    public static int MDC(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}