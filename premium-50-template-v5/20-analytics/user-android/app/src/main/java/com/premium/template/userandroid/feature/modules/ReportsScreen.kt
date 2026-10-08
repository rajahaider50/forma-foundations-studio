package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ReportsScreen(onCreate:()->Unit){Card{Column{Text("Reports");Text("Domain-specific reports workflow");Button(onClick=onCreate){Text("Create")}}}}
