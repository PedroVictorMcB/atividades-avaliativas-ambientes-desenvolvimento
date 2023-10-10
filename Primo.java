import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Primo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> primo = new ArrayList<>();

        System.out.print("Digite um numero: ");
        int num1 = sc.nextInt();
        sc.close();

        for (int i = num1; i > 0; i--) {
            if (num1 % i == 0) {
                primo.add(i);
            }
        }

        if (primo.size() == 2) {
            System.out.println("O numero " + num1 + " eh primo, pois eh dividido apenas por " + primo + ".");
        } else {
            System.out.println("O numero " + num1 + " nao eh primo, pois eh dividido por " + primo + ".");
        }
    }
}