package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ResponsesScreen(onCreate:()->Unit){Card{Column{Text("Responses");Text("Domain-specific responses workflow");Button(onClick=onCreate){Text("Create")}}}}
