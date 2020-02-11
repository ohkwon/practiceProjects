class threeSum {
    #sorted = [];
    #output = [];
    function threeSum(nums) {
        var output = [];

        if (nums.length < 3) {
            return this.#output;
        }

        for (var i = 0; i < nums.length; i++) {
            if (i > 1) { // binary pair finding
                this.find(nums, i);
            }
            // binary sort
            this.sort(nums[i]);
        }
    }

    function find(nums, i) {
        for (var i2 = i + 1; i2 < nums.length; i2++) {
            
        }
    }

    function sort() {

    }


}