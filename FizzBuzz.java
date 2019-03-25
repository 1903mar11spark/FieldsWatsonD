
public class FizzBuzz{

	public void fizzBuzz1(){
		for(int i = 1; i <= 100; i++){
			if(i % 15 == 0) {
				System.out.println("fizzbuzz" + "\n");
			}else if(i % 3 == 0){
				System.out.println("fizz" + "\n");
			}else if(i % 5 == 0){
				System.out.print("buzz" + "\n");
			}else {
				System.out.println(i);
			}

		}
	}
	public void fizzBuzz2(int m,int n){
		for(int i=m; i<=n;i++) {
			if(i % 15==0) {
				System.out.println("fizzbuzz" + "\n");
			}else if(i%3==0) {
				System.out.println("fizz"+ "\n");
			}else if(i%5==0) {
				System.out.println("buzz"+ "\n");
			}else {
				System.out.println(i);
			}
		}
	}
	public void fizzBuzz3(int m, int n, int fizzNum, int buzzNum){
		//Multiple of fizzNum
		for(int i=m; i<=n;i++) {
			int fizzBuzzNum = fizzNum*buzzNum;
			if(i%fizzBuzzNum==0) {
				System.out.println("fizzbuzz" +"\n");
			}else if(i%fizzNum==0) {
				System.out.println("fizz" + "\n");
			}else if(i%buzzNum==0) {
				System.out.println("buzz"+"\n");
			}else
				System.out.println(i);
		};
	}

	/*
    Variable-length FizzBuzz with arrays:
    Write a method called fizzBuzz4 which prints out the numbers m-n 
with substitutions of: 
    each element of the numbers array replaced by the element at the 
same index of the terms array.
    e.g., to mimic the behavior of fizzBuzz1, you would call the method 
like so:
    fizzBuzz4(1,100,[3,5],['fizz','buzz'])
    Validation that m <= n is a plus. 
    The arrays may have any length, but validation that their length is 
the SAME is a plus. 
	 */

	public void fizzBuzz4(int m, int n, int[] numbers, String[] 
terms){
		for(int i = m; i <=n; i++) {
			for(int j = 1; j<numbers.length; j++) {
				if(i % numbers[j-1]==0) {
					System.out.println(terms[j-1]);
				}else if(i % numbers[j]==0) {
					System.out.println(terms[j]);
				}else {
					System.out.println(i);
				}

			}
		}

	}





}

