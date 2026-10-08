package com.premium.template.adminandroid.core.network

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject

class LocalStore(context:Context){private val prefs=context.getSharedPreferences("template_local_store",Context.MODE_PRIVATE);fun read(path:String):String{return prefs.getString(path,"{\"data\":[]}")!!}fun write(path:String,body:String):String{prefs.edit().putString(path,body).apply();return body}fun delete(path:String):Boolean{prefs.edit().remove(path).apply();return true}}
