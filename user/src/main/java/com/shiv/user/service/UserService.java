package com.shiv.user.service;

import com.shiv.user.dto.ResponseDto;
import com.shiv.user.entity.User;

public interface UserService {

    User saveUser(User user);
    ResponseDto getUser(Long userId);
}
