package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ViewingsScreen(onCreate:()->Unit){Card{Column{Text("Viewings");Text("Domain-specific viewings workflow");Button(onClick=onCreate){Text("Create")}}}}
