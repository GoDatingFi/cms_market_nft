import { requestWithJwt, requestWithoutJwt } from "api/request/index.api";
import {
  LoginRequestBody,
  LoginAdminRequestBody,
  LogoutRequestBody,
  LogoutAdminRequestBody,
  UserInfoResponse,
  MetamaskInfoResponse,
  UpdateProfileRequestBody,
  UpdateProfileResponse,
  SetAddressRequestBody,
  SetAddressResponse,
} from './index.interface'

import { AxiosResponse } from "axios";

export const getMetamaskInfo = (
  address: string,
): Promise<AxiosResponse<MetamaskInfoResponse>> => {
  return requestWithoutJwt.get<MetamaskInfoResponse>(
    `/auth/get-nonce/${address}`,
  );
};

export const login = (
  params: LoginRequestBody,
): Promise<AxiosResponse<UserInfoResponse>> => {
  return requestWithoutJwt.post<UserInfoResponse>("/auth/login", params);
};

export const loginAdmin = (
  params: LoginAdminRequestBody,
): Promise<AxiosResponse<UserInfoResponse>> => {
  return requestWithoutJwt.post<UserInfoResponse>("/admin/login", params);
};

export const logout = (
  params: LogoutRequestBody
): Promise<AxiosResponse> => {
  return requestWithJwt.post("/auth/logout", params);
};

export const logoutAdmin = (
  params: LogoutAdminRequestBody,
): Promise<AxiosResponse> => {
  return requestWithJwt.post("/admin/logout", params);
};

export const updateProfile = (
  userID: string,
  params: Partial<UpdateProfileRequestBody>,
): Promise<AxiosResponse<UpdateProfileResponse>> => {
  return requestWithJwt.put<UpdateProfileResponse>(
    `/user/update/${userID}`,
    params,
  );
};

export const updateAddressAdmin = (
  params: SetAddressRequestBody,
): Promise<AxiosResponse<SetAddressResponse>> => {
  return requestWithJwt.post<SetAddressResponse>("/auth/setAddress", params);
};