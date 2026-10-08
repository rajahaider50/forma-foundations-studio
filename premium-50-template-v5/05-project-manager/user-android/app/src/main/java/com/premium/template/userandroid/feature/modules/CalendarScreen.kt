package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CalendarScreen(onCreate:()->Unit){Card{Column{Text("Calendar");Text("Domain-specific calendar workflow");Button(onClick=onCreate){Text("Create")}}}}
