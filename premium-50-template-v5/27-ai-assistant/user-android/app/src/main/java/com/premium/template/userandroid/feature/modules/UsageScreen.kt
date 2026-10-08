package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun UsageScreen(onCreate:()->Unit){Card{Column{Text("Usage");Text("Domain-specific usage workflow");Button(onClick=onCreate){Text("Create")}}}}
