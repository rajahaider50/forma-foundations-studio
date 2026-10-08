package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CheckinsScreen(onCreate:()->Unit){Card{Column{Text("Checkins");Text("Domain-specific checkins workflow");Button(onClick=onCreate){Text("Create")}}}}
