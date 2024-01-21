#include <stdio.h>
#include <stdlib.h>


void hanoi(int n,char initial,char final,char temp){
    if(n==1){
        printf("moving the disk 1  from needle %c to needle %c\n",initial,final);
        return;
    }
    hanoi(n-1,initial,temp,final);
    printf("moving the %d disk from needle %c to needle %c\n",n,initial,final);
    hanoi(n-1,temp,final,initial);
}


void main(){
    int n;
    printf("enter the value of n: ");
    scanf("%d",&n);
    hanoi(n,'A','B','C');
}