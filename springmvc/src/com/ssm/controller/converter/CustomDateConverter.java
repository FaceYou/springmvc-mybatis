package com.ssm.controller.converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

public class CustomDateConverter implements Converter<String, Date> {

	@Override
	public Date convert(String str) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		try {
			return simpleDateFormat.parse(str);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}

}
