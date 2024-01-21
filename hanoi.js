function hanoi(numberOfDisk, initial, final, temp) {
  if (numberOfDisk == 1) {
    console.log(
      `moving the disk number 1 from needle ${initial} to needle ${final}`
    );
    return;
  }

  hanoi(numberOfDisk - 1, initial, temp, final);
  console.log(
    `moving the disk number ${numberOfDisk} from needle ${initial} to ${final}`
  );
  hanoi(numberOfDisk - 1, temp, final, initial);
}

number = prompt("enter the number of disks: ");
hanoi(number, "A", "B", "C");
