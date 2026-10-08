package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ServicesScreen(onCreate:()->Unit){Card{Column{Text("Services");Text("Domain-specific services workflow");Button(onClick=onCreate){Text("Create")}}}}
