public class SparseArray02 {
    public static void main(String[] args) {
        // 1.创建原始二维数组，赋值
        // 2.根据原始二维数组，创建稀疏数组
        // 3.根据稀疏数组还原原始二维数组
        int chessArr1[][] = new int[11][11];
        chessArr1[0][1] = 5;
        chessArr1[0][2] = 50;
        chessArr1[1][2] = 7;
        chessArr1[1][1] = 99;
        // 打印原始二维数组
        System.out.println("打印原始二维数组");
        for (int[] row : chessArr1) {
            for (int data : row) {
                System.out.printf("%d\t", data);
            }
            System.out.println();
        }
        // 取出原始数组非0个数,加1作为稀疏数组行
        int num = 0;
        for (int i = 0; i < 11; i++) {
            for (int j = 0; j < 11; j++) {
                if (chessArr1[i][j] != 0) {
                    num++;
                }
            }
        }
        // 创建稀疏数组
        int sparseArr[][] = new int[num + 1][3];
        sparseArr[0][0] = 11;
        sparseArr[0][1] = 11;
        sparseArr[0][2] = num;
        // 遍历原始数组 加入稀疏数组
        int count = 0;
        for (int i = 0; i < 11; i++) {
            for (int j = 0; j < 11; j++) {
                if (chessArr1[i][j] != 0) {
                    count++;
                    sparseArr[count][0] = i;
                    sparseArr[count][1] = j;
                    sparseArr[count][2] = chessArr1[i][j];
                }
            }
        }
        //打印稀疏数组
        System.out.println();
        System.out.println("打印稀疏数组");
        for(int row[]:sparseArr){
            for(int data:row){
                System.out.printf("%d\t",data);
            }
            System.out.println();
        }
        //根据稀疏数组第0排创建原始数组的行列
        int chessArr2[][]=new int[sparseArr[0][0]][sparseArr[0][1]];
        //遍历稀疏数组，加入原始数组
        for(int i=1;i<sparseArr.length;i++){
                chessArr2[sparseArr[i][0]][sparseArr[i][1]]=sparseArr[i][2];
        }
        //打印chessArr2
        System.out.println("打印还原的原始二维数组");
        for (int[] row : chessArr2) {
            for (int data : row) {
                System.out.printf("%d\t", data);
            }
            System.out.println();
        }
       
     


    }
}
