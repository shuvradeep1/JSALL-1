public class std{

    static void sayNumber(Object a, Object b){

         if(a instanceof Integer && b instanceof Integer){
           System.out.println("The Sum of two number is "+((int)a+(int)b));
         }else{
                    System.out.println("The a and b was not a number");
         }
        }


    public static void main(String[] args) {
       sayNumber(6, "a");
        

    }
}