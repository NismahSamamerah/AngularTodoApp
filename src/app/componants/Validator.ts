
export class Validator1 {
  static isValidName(name :string) :boolean{
    if(name.length >=10 && name.length <=30){
      return true;
    }
    return false;
  }

  static isValidGenger(gender :string) :boolean{
    if(gender ==='1' || gender === '2'){
      return true;
    }
    return false;
  }

  static isValidAge(age :any) :boolean{
    if(age >=13 && age <=80){
      return true;
    }
    return false;
  }

  static isValidEmail(email :string) :boolean{
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if(email.match(regex)){
    return true;
  }
  return false;
}
  static isValidPassword(pass :string) :boolean{
    if(pass.length >= 6 && pass.length <=15){
      return true ;
    }
    return false;
  }
  static isValidConfirmPassword(confirmPss :string , pass :string) :boolean{
    if(confirmPss === pass){
      return true;
    }
    return false;
  }
}

