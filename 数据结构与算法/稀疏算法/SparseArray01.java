public class SparseArray01 {
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
        //将二维数组转换为稀疏数组
        //1.遍历二维数组 得到非0数据的个数
        int num =0;
        for(int i=0;i<11;i++){
            for(int j =0;j<11;j++){
                   if(chessArr1[i][j]!=0){
                    num++;
                   }
            }
        }
        //2.创建对应的稀疏数组
        int sparseArr[][] =new int[num + 1][3];
        //给稀疏数组赋值
        sparseArr[0][0]=11;
        sparseArr[0][1]=11;
        sparseArr[0][2]=num;
        //遍历二维数组，将非0的值存入sparseArr中
        int count =0;
        for(int i=0;i<11;i++){
            for (int j = 0; j < 11; j++) {
                if(chessArr1[i][j]!=0){
                    count++;
                    sparseArr[count][0]=i;
                    sparseArr[count][1]=j;
                    sparseArr[count][2]=chessArr1[i][j];
                }
            }
        }
        //输出稀疏数组
        System.out.println();
        System.out.println("得到稀疏数组为~~~~~");
        for(int i=0;i<sparseArr.length;i++){
            System.out.printf("%d\t%d\t%d\t\n", sparseArr[i][0], sparseArr[i][1], sparseArr[i][2]);
        }
        System.out.println();
        //将稀疏数组  --》》恢复成原始数组
        // 1.先读取第一行，根据第一行数据，创建原始二维数据
        int chessArr2[][] = new int[sparseArr[0][0]][sparseArr[0][1]];
        //2. 在读取稀疏数组后几行的数据(从第二行开始)，并赋给 原始的二维数组 即可
        for(int i=1;i<sparseArr.length;i++){
            chessArr2[sparseArr[i][0]][sparseArr[i][1]]=sparseArr[i][2];
        }
        //输出恢复后的二维数组
        System.out.println();
		System.out.println("恢复后的二维数组");
		
        for(int[] row:chessArr2){
            for(int data:row){
                System.out.printf("%d\t",data);
            }
            System.out.println();
        }
    }
}
