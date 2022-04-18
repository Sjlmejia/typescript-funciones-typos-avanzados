import { User, ROLES } from "./01-enum";

const currentUser:User = {
  username: 'nico',
  role: ROLES.CUSTOMER,
}

export const checkAdminRole =() => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

export const checkRole =() => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

export const checkRoleV2 =(roles:string[]) => {
  if (roles.includes(currentUser.role) ) {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log(rta);

const rta2 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log(rta2);

export const checkRoleV3 =(...roles:string[]) => {
  if (roles.includes(currentUser.role) ) {
    return true;
  }
  return false;
}


const rta3 = checkRoleV3(ROLES.ADMIN, ROLES.CUSTOMER);
console.log(rta3);