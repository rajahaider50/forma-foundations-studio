package com.premium.template.adminandroid.core.network

import java.net.HttpURLConnection
import java.net.URL

interface ApiClient{suspend fun get(path:String):String;suspend fun post(path:String,body:String):String;suspend fun delete(path:String):Boolean}
class HttpApiClient(private val baseUrl:String,private val tokenProvider:()->String?={null}):ApiClient{private fun request(path:String,method:String,body:String?=null):String{val c=URL(baseUrl.trimEnd('/')+path).openConnection() as HttpURLConnection;c.requestMethod=method;c.connectTimeout=8000;c.readTimeout=8000;c.setRequestProperty("Accept","application/json");tokenProvider()?.let{c.setRequestProperty("Authorization","Bearer ${it}")};if(body!=null){c.doOutput=true;c.setRequestProperty("Content-Type","application/json");c.outputStream.use{it.write(body.toByteArray())}};val code=c.responseCode;val stream=if(code in 200..299)c.inputStream else c.errorStream;if(code !in 200..299)throw IllegalStateException("HTTP_$code:"+(stream?.bufferedReader()?.readText()?: ""));return stream?.bufferedReader()?.readText()?: ""}override suspend fun get(path:String)=request(path,"GET");override suspend fun post(path:String,body:String)=request(path,"POST",body);override suspend fun delete(path:String)=request(path,"DELETE").let{true}}
class LocalApiClient(private val store:LocalStore):ApiClient{override suspend fun get(path:String)=store.read(path);override suspend fun post(path:String,body:String)=store.write(path,body);override suspend fun delete(path:String)=store.delete(path)}
