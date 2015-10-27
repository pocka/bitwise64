var expect=require('chai').expect;

var bw64=require('../index');

describe('bitwise64',function(){
	describe('#and()',function(){
		it('should return 0xFFFFFFFFFFFF0 when FFFFFFFFFFFFF and 0xFFFFFFFFFFFFF are passed',function(){
			expect(bw64.and(0xFFFFFFFFFFFF0,0xFFFFFFFFFFFFF)).to.equal(0xFFFFFFFFFFFF0);
		});
	});
	describe('#or()',function(){
		it('should return 0xFFFFFFFFFFFFF when 0xFFFFFFFFFFFF0 and 0xFFFFFFFFFFFFF are passed',function(){
			expect(bw64.or(0xFFFFFFFFFFFF0,0xFFFFFFFFFFFFF)).to.equal(0xFFFFFFFFFFFFF);
		});
	});
	describe('#xor()',function(){
		it('should return 0xF when 0xFFFFFFFFFFFF0 and 0xFFFFFFFFFFFFF are passed',function(){
			expect(bw64.xor(0xFFFFFFFFFFFF0,0xFFFFFFFFFFFFF)).to.equal(0xF);
		});
	});
	describe('#not()',function(){
		it('should return 0xFFFFFF000000000F when 0x0FFFFFFFFF0 is passed',function(){
			expect(bw64.not(0x0FFFFFFFFF0)).to.equal(0xFFFFFF000000000F);
		});
	});
});
