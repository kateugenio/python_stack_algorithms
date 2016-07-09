# Print 1-255
def print1to255():
	for item in range(1,256):
		print item


# Print odds 1-255
def printodds1to255():
	for items in range(1,256):
		if (items % 2 == 1):
			print items


# Print Ints and Sum 0-255
def printIntsAndSum():
	sum = 0
	for item in range(0,256):
		sum += item
		print "The current number is", item, "and the sum so far is", sum


# Iterate and Print Array
def iterateArray(arr):
	for item in arr:
		print item

itterateArray([1,2,3,4,5,6])


# Find and Print Max
def findMax(arr):
	for item in arr:
		print max(arr)


# Square the Values
def squareValues(arr):
	newArr = []
	for item in arr:
		newArr.append(item*item)

	print newArr

squareValues([2,4,6])


# Greater Than Y
def greaterThanY(arr,y):
	for item in arr:
		if (item > y):
			print item


# Zero Out Negative Numbers
def zeroOutNegatives(arr):
	newList = []
	for item in arr:
		if (item < 0):
			newList.append(0)
		elif (item > 0_
			newList.append(item)

	print newList


# Max, Min, average
def maxMinAvg(arr):
	max = arr[0]
	min = arr[0]
	sum = 0
	for item in arr:
		if (item > max):
			max = item
		elif (item < min):
			min = item
		sum += item
	print max, min, sum/len(arr)

