import java.io.*;

public class SparseArrayio03 {
    public static void main(String[] args) {
        // 1.创建原始数组
        int chessArr1[][] = new int[11][11];
        int count = 0;
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                count++;
                chessArr1[i][j] = count;
            }
        }
        // 2.将原始数组输出到io 方法  savetxt

        savetxt(chessArr1); 

        // 取出原始数组中，非0个数
        int num = 0;
        for (int[] row : chessArr1) {
            for (int data : row) {
                if (data != 0) {
                    num++;
                }
            }
        }

        int[][] sparseArr = forsparseArr(chessArr1, num);

        System.out.println();
        // 打印稀疏数组,并统计非0个数nun
        int nun = 0;
        System.out.println("打印稀疏数组");
        for (int[] row : sparseArr) {
            for (int data : row) {
                System.out.printf("%d\t", data);
                if (data != 0) {
                    nun++;
                }
            }
            System.out.println();
        }
        System.out.println(nun);

    }
    //原始数组转化为稀疏数组方法
    private static int[][] forsparseArr(int[][] chessArr1, int num) {
        // 创建稀疏数组
        int sparseArr[][] = new int[num + 1][3];
        // 给稀疏数组第0行赋值
        sparseArr[0][0] = sparseArr.length;
        sparseArr[0][1] = sparseArr[0].length;
        sparseArr[0][2] = num;
        // 给稀疏数组其它元素赋值
        int count1 = 0;
        System.out.println(chessArr1.length);
        System.out.println(chessArr1[0].length);
        for (int i = 1; i < chessArr1.length; i++) {
            for (int j = 0; j < chessArr1[0].length; j++) {
                if (chessArr1[i][j] != 0) {
                    count1++;
                    sparseArr[count1][0] = i;
                    sparseArr[count1][1] = j;
                    sparseArr[count1][2] = chessArr1[i][j];
                }
            }

        }
        return sparseArr;
    }
     //原始数据保存到io方法
    private static void savetxt(int[][] chessArr1) {
        File file = new File("chessArr1.txt");
        try {
            if (!file.exists()) { // 如果文件不存在则新建文件
                file.createNewFile();
            }
            FileWriter fop = new FileWriter(file);
            // 遍历将数组写入txt文件中:
            for (int i = 0; i < chessArr1.length; i++) {
                // 数据前n-1列尾部加入","
                for (int j = 0; j < chessArr1[0].length - 1; j++) {
                    fop.write(chessArr1[i][j]);
                    fop.write("\n");
                }
            }
            fop.flush();
            fop.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
