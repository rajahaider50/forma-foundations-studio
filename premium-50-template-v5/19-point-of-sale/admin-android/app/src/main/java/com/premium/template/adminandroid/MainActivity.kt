package com.premium.template.adminandroid
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.premium.template.adminandroid.navigation.AppNavigation
class MainActivity:ComponentActivity(){override fun onCreate(b:Bundle?){super.onCreate(b);setContent{AppNavigation()}}}
