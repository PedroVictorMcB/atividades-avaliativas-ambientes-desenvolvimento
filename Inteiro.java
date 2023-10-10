import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Neste código não foi importado a biblioteca Locale, por tanto ao inserir números de ponto flutuante, coloque a virgurla, se esta for necessária em seu idioma

public class Inteiro {
    private static List<Double> array = new ArrayList<>();
    private static int cont = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a quantidade de números: ");
        int N = scanner.nextInt();

        makeArray(N);

        System.out.println("Números Digitados: " + array);
        countIntegers();
        System.out.println("Números Inteiros: " + cont);

        scanner.close();
    }

    private static void makeArray(int N) {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < N; i++) {
            System.out.print("Digite o " + (i + 1) + "º número: ");
            double num = scanner.nextDouble();
            array.add(num);
        }

        scanner.close();
    }

    private static void countIntegers() {
        for (double num : array) {
            if (isInteger(num)) {
                cont++;
            }
        }
    }

    private static boolean isInteger(double num) {
        return num == (int) num;
    }
}




