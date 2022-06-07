import {
  PersonalInfo,
  User,
} from 'utils/interfaces'

export interface LoginRequestBody {
  address: string;
  signature: string;
}

export interface LoginAdminRequestBody {
  address: string;
  signature: string;
}

export interface LogoutRequestBody {
  refreshToken: string;
}

export interface LogoutAdminRequestBody extends LogoutRequestBody {}

export interface UserInfoResponse {
  data: PersonalInfo;
}

export interface UpdateProfileRequestBody {
  address: string;
  nonce: number;
  avatar: string;
  username: string;
  email: string;
  personalSiteOrPortfolio: string;
}

export interface UpdateProfileResponse {
  data: User;
}

export interface SetAddressRequestBody {
  address: string;
}

export interface SetAddressResponse {
  data: User;
}


export interface MetamaskInfoResponse {
  data: {
    address: string;
    nonce: string;
    isNew?: boolean;
  };
}

export interface UserInfoResponse {
  data: PersonalInfo;
}

export interface UpdateProfileResponse {
  data: User;
}

export interface GetUserDetailResponse {
  data: User & {
    avatar: string;
    personalSiteOrPortfolio: string;
  };
}
