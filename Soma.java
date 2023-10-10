import java.util.Scanner;

public class Soma {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite um numero: ");
        int n = sc.nextInt();
        
        int soma = 0;
        
        for (int i = 1; i <= n; i++) {
            soma += i;
        }
        
        System.out.println("A soma de 1 a " + n + " eh igual a " + soma);
        
        sc.close();
    }
}