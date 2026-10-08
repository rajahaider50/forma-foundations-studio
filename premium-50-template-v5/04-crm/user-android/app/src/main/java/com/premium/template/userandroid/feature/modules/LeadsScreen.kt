package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun LeadsScreen(onCreate:()->Unit){Card{Column{Text("Leads");Text("Domain-specific leads workflow");Button(onClick=onCreate){Text("Create")}}}}
