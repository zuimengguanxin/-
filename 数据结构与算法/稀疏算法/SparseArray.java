public class SparseArray {
    public static void main(String[] args) {
        //创建一个原始的二维数组 11*11
        //0表示没有棋子， 1表示黑子 2表示蓝
        int chessArr1[][] = new int[11][11];
        chessArr1[1][2]=1;
        chessArr1[2][3]=2;
        //输出原始数组
        System.out.println("原始数组");
        for(int[] row :chessArr1){
            for(int data : row){
                System.out.printf("%d\t",data);
            }
            System.out.println();
        }
    }
}
