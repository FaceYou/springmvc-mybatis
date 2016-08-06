package com.ssm.exception.customException;

public class CustomException extends Exception{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String errorMessage;

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public CustomException(String errorMessage) {
		super();
		this.errorMessage = errorMessage;
	}

	@Override
	public String toString() {
		return "CustomException [errorMessage=" + errorMessage + "]";
	}
	
}
